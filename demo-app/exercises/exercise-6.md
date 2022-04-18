# Exercise 6

1. Create a Car Form component to collect new car data. The id should not be collected on the form.

2. Utilize the new Car Form component in the Car Tool component to collect new car data and then add it to the car table.

3. Add a new column to Car Table with a header of "Actions".

4. In the Car View Row component, add a new column with a button of "Delete". When the "Delete" button is clicked, remove the row from the table.

Hint: Use the array `filter` function to perform the delete.

```javascript
const newCars = cars.filter(c => c.id !== carIdToDelete);
```

5. Ensure it works!