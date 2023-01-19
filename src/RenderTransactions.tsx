import { Badge, Button, IconButton, Kbd, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Table, TableContainer, Tbody, Td, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react';
import { SettingsIcon } from '@chakra-ui/icons';
import { useEffect, useCallback } from 'react';

import { CATEGORIES } from './categories';
import { Category, Transaction } from './types';

interface RenderTransactionsProps {
    data: Transaction[] | undefined,
    changeCategory: (arg1: number, arg2: number) => any,
}

interface ModalProps {
    transaction: Transaction,
    changeCategory: (arg1: number, arg2: number) => any,
}

interface ListenForButtonPressProps {
    transaction: Transaction,
    onClose: () => any,
    changeCategory: (arg1: number, arg2: number) => any,
}

export default function RenderTransactions(props: RenderTransactionsProps) {
    return (
        <TableContainer>
            <Table variant="simple" size="sm">
                <Thead>
                    <Tr>
                        <Th textAlign="center">Date</Th>
                        <Th textAlign="center">Amount</Th>
                        <Th textAlign="center">Description</Th>
                        <Th textAlign="center">Category</Th>
                        <Th textAlign="center">Edit</Th>
                        <Th textAlign="center">Account</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {props.data?.map((item: Transaction, index) => {
                        return(<Tr key={'transaction-' + index}>
                            <Td>{item.date.toDateString()}</Td>
                            <Td>{item.amount.toFixed(2)}</Td>
                            <Td>{item.description}</Td>
                            <Td><Badge colorScheme={item.category.color}>{item.category.title}</Badge></Td>
                            <Td>
                                <ChangeCategoryModal transaction={item} changeCategory={props.changeCategory} />
                            </Td>
                            <Td>{item.account}</Td>
                        </Tr>)
                    })}
                </Tbody>
            </Table>
        </TableContainer>
    )
}

const ChangeCategoryModal = (props: ModalProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    return (
      <>
        <IconButton
            aria-label='Change category'
            icon={<SettingsIcon />}
            onClick={onOpen}
        />
  
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{props.transaction.description}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <p>{props.transaction.date.toDateString()} &nbsp; // &nbsp; ${props.transaction.amount.toFixed(2)}</p>
                <ListenForButtonPress onClose={onClose} changeCategory={props.changeCategory} transaction={props.transaction} />
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
}

const ListenForButtonPress = (props: ListenForButtonPressProps) => {
    const pressFunction = useCallback((event: { key: string; }) => {
        CATEGORIES.map((category: Category) => {
            if (parseInt(event.key) - 1 === category.id) {
                props.changeCategory(props.transaction.id, category.id);
                props.onClose();
            }
        })
    }, []);
  
    useEffect(() => {
      document.addEventListener("keydown", pressFunction, false);
  
      return () => {
        document.removeEventListener("keydown", pressFunction, false);
      };
    }, []);
  
    return (   
      <Table>
        <Tbody>
            {CATEGORIES.map((category: Category, index) => {
                return(
                    <Tr key={"category-change-" + index}>
                        <Td>{category.icon}</Td>
                        <Td>Press &nbsp;<Kbd>{category.id + 1}</Kbd> to change to <Badge colorScheme={category.color}>{category.title}</Badge></Td>
                    </Tr>
                );
            })}
        </Tbody>
      </ Table>
    )
}