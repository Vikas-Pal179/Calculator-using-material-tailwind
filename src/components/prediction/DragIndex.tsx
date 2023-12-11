// import React from "react";

// function DragIndex() {
//   const ary = [10, 20, 30, 40, 50, 60, 70];
//   return (
//     <div>
//       {ary.map((item: number, index: number) => (
//         <React.Fragment key={index}>
//           <p>
//             {item} index:{index}
//           </p>
//         </React.Fragment>
//       ))}
//     </div>
//   );
// }

// export default DragIndex;

import React, { useState } from "react";
import { DndProvider, useDrag, useDrop, DropTargetMonitor } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

interface DraggableItemProps {
  id: number;
  index: number;
  text: number;
  moveCard: (fromIndex: number, toIndex: number) => void;
}

const ItemTypes = {
  CARD: "card",
};

const DraggableItem: React.FC<DraggableItemProps> = ({
  id,
  index,
  text,
  moveCard,
}) => {
  const [, ref] = useDrag({
    type: ItemTypes.CARD,
    item: { id, index },
  });

  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
    hover: (
      item: { id: number; index: number },
      monitor: DropTargetMonitor
    ) => {
      if (item.index !== index) {
        moveCard(item.index, index);
        item.index = index;
      }
    },
  });

  return (
    <div ref={(node) => ref(drop(node))}>
      <p>
        {text} index: {index}
      </p>
    </div>
  );
};

const DragIndex: React.FC = () => {
  const [ary, setAry] = useState([10, 20, 30, 40, 50, 60, 70]);

  const moveCard = (fromIndex: number, toIndex: number) => {
    const newAry = [...ary];
    const [movedItem] = newAry.splice(fromIndex, 1);
    newAry.splice(toIndex, 0, movedItem);
    setAry(newAry);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        {ary.map((item, index) => (
          <DraggableItem
            key={index}
            id={index}
            index={index}
            text={item}
            moveCard={moveCard}
          />
        ))}
      </div>
    </DndProvider>
  );
};

export default DragIndex;
