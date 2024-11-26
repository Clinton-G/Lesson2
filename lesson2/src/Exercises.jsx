import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addExercise, deleteExercise } from './store/exerciseSlice';

const Exercises = () => {
  const dispatch = useDispatch();
  const exercises = useSelector((state) => state.exercises.exerciseLogs);

  const [exercise, setExercise] = useState({
    id: '',
    type: '',
    duration: '',
    calories: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setExercise({ ...exercise, [name]: value });
  };

  const handleAddExercise = (e) => {
    e.preventDefault();
    if (exercise.type && exercise.duration && exercise.calories) {
      const newExercise = {
        ...exercise,
        id: Date.now(),
      };
      dispatch(addExercise(newExercise));
      setExercise({ type: '', duration: '', calories: '', id: '' });
    }
  };

  const handleDeleteExercise = (id) => {
    dispatch(deleteExercise(id));
  };

  return (
    <div className="container">
      <h1>Excercise Log:</h1>

      <form onSubmit={handleAddExercise}>
        <input
          type="text"
          name="type"
          value={exercise.type}
          onChange={handleInputChange}
          placeholder="Exercise Type"
          required
        />
        <input
          type="number"
          name="duration"
          value={exercise.duration}
          onChange={handleInputChange}
          placeholder="Duration (minutes)"
          required
        />
        <input
          type="number"
          name="calories"
          value={exercise.calories}
          onChange={handleInputChange}
          placeholder="Calories Burned"
          required
        />
        <button type="submit">Add Exercises:</button>
      </form>

      <ul>
        {exercises.map((exercise) => (
          <li key={exercise.id}>
            <span>{exercise.type}</span> - <span>{exercise.duration} Mins</span> -{' '}
            <span>{exercise.calories} Calories</span>
            <button onClick={() => handleDeleteExercise(exercise.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Exercises;
