import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const CardSkeleton = () => {
  return (
    <Card borderRadius="15px" overflow="hidden">
      <Skeleton height="354px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default CardSkeleton;
