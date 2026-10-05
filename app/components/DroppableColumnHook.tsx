import { useDroppable } from '@dnd-kit/react';

type DroppableColumnComponentProps = {
  id: string;
  children: React.JSX.Element;
};

const DroppableColumnComponent = ({
  id,
  children,
}: DroppableColumnComponentProps) => {
  const { ref } = useDroppable({
    id,
  });

  return <div ref={ref}>{children}</div>;
};

export default DroppableColumnComponent;
