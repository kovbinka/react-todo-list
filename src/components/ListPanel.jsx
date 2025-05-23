import { useState } from 'react';
import '../index.css'

const ListPanel = ({ tasks, onDelete, onEdit, onToggleDone }) => {
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
    <ul>
      {tasks.length === 0 ? (
        <p>No tasks yet.</p>
      ) : (
        tasks.map(task => (
          <li
            key={task.id}
            onClick={() => onToggleDone(task.id)}
            className={task.done ? 'done' : ''}
            style={{ cursor: 'pointer' }}
          >
            {editingId === task.id ? (
              <form onClick={(e) => e.stopPropagation()} onSubmit={(e) => handleEditSubmit(e, task.id)}>
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
                <span style={{ flex: 1 }}>{task.text}</span>
                <div onClick={(e) => e.stopPropagation()}>
                  <button onClick={() => onDelete(task.id)}>🗑</button>
                  <button onClick={() => startEditing(task)}>✏️</button>
                </div>
              </>
            )}
          </li>
        ))
      )}
    </ul>
  );
};

export default ListPanel;
