import { useState } from 'react';

const ListPanel = ({ tasks, onDelete, onEdit }) => {
  const [editingId, setEditingId] = useState(null);
  const [editValue, setEditValue] = useState('');

  const startEditing = (task) => {
    setEditingId(task.id);
    setEditValue(task.text);
  };

  const handleEditSubmit = (e, id) => {
    e.preventDefault();
    onEdit(id, editValue);
    setEditingId(null);
    setEditValue('');
  };

  return (
    <div>
      {tasks.length === 0 ? (
        <p>No tasks yet.</p>
      ) : (
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              {editingId === task.id ? (
                <form onSubmit={(e) => handleEditSubmit(e, task.id)}>
                  <input
                    type="text"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                  />
                  <button type="submit">💾</button>
                  <button type="button" onClick={() => setEditingId(null)}>✖</button>
                </form>
              ) : (
                <>
                  {task.text}
                  <button onClick={() => onDelete(task.id)}>🗑</button>
                  <button onClick={() => startEditing(task)}>✏️</button>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListPanel;
