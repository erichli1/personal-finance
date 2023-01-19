import { InputProps, useMultiStyleConfig, Input } from "@chakra-ui/react";

export default function FileInput(props: InputProps) {
    const styles = useMultiStyleConfig("Button", { variant: "outline" });
  
    return (
      <Input
        type="file"
        variant="unstyled"
        sx={{
          "::file-selector-button": {
            border: "none",
            outline: "none",
            mr: 2,
            ...styles,
          },
        }}
        {...props}
      />
    );
  };