import { Button, Wrap, WrapItem,useToast } from "@chakra-ui/react";
export default function ToastStatus() {
  const toast = useToast();
  const statuses = ["success", "error", "warning", "info"];

  return (
    <Wrap>
      {statuses.map((status, i) => (
        <WrapItem key={i}>
          <Button
            onClick={() =>
              toast({
                title: `${status} toast`,
                status: status,
                isClosable: true,
              })
            }
          >
            Show {status} toast
          </Button>
        </WrapItem>
      ))}
    </Wrap>
  );
}
