# Car Management Application - Functionalities Checkpoint

## 1. User Authentication
- [ ] **Login/Signup functionality:**
  - Users can create an account by providing a valid email and password.
  - Users can log in to their accounts using their credentials (email and password).
  - The system should securely handle password hashing and authentication.

## 2. Add a Car
- [ ] **Add car with details:**
  - Users can add a new car to their profile.
  - Each car entry should have the following attributes:
    - **Images:** Upto 10 images.
    - **Title:** A title for the car.
    - **Description:** A detailed description of the car.
    - **Tags:** Tags to categorize the car.

## 3. View All Cars
- [ ] **View list of all cars:**
  - Users can view a list of all the cars they have added to their profile.
  - Each car should be displayed with its title, a thumbnail image, and tags.

## 4. Global Search
- [ ] **Global search functionality:**
  - Users can search through all their cars by typing a keyword.
  - The search should return cars whose title, description, or tags match the keyword.
  - Search results should be sorted based on relevance.

## 5. View Car Details
- [ ] **View car details:**
  - Users can click on a car in the list to view its detailed page.
  - The detailed page should display:
    - Car title.
    - Full description.
    - All images associated with the car.
    - Tags.

## 6. Update Car Information
- [ ] **Update car details:**
  - Users can update the following fields for a car:
    - **Title**
    - **Description**
    - **Tags**
    - **Images:** Replace or remove images (up to 10 images).
  - Changes should be saved and reflected immediately.

## 7. Delete Car
- [ ] **Delete car functionality:**
  - Users can delete a car from their profile.
  - Once deleted, the car should be removed from the database and no longer visible in the list or detail view.

---

## Notes:
- **Role-based access:** Ensure proper role-based access for product management (admin vs. regular users).
- **UI/UX:** The interface should be user-friendly, allowing easy addition, editing, searching, and deleting of cars.
- **Security:** Ensure secure user authentication and data storage, especially regarding sensitive information such as passwords and car details.
- **Database:** The car details (title, description, tags, images) should be stored in a structured format in the database (likely PostgreSQL or MongoDB).
