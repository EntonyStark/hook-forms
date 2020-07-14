import React, { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';

const itemTypes = {
  ELEMENT: 'element',
};

export const DNDElement = ({
  id, text, index, moveElement, setFormElementToUpdate, removeElement,
}) => {
  const ref = useRef(null);
  const [, drop] = useDrop({
    accept: itemTypes.ELEMENT,
    hover(item, monitor) {
      if (!ref.current) return;
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) return;

      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return;
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return;

      moveElement(dragIndex, hoverIndex);
      // eslint-disable-next-line no-param-reassign
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    item: { type: itemTypes.ELEMENT, id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));

  const editClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setFormElementToUpdate(id);
  };
  const removeClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    removeElement(id);
  };

  return (
    <div className="card bg-light mb-3" ref={ref} style={{ cursor: 'move', opacity }}>
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <div>
            <span className="mr-2">
              <i className="fas fa-ellipsis-v" /><i className="fas fa-ellipsis-v" />
            </span>
            {text}
          </div>
          <div>
            <button type="button" className="btn btn-outline-info btn-sm mr-2" onClick={editClick}>Edit</button>
            <button type="button" className="btn btn-outline-danger btn-sm" onClick={removeClick}>Remove</button>
          </div>
        </div>
      </div>
    </div>
  );
};
