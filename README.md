# ItsRainingRaincoats

ItsRainingRaincoats (IRR) is a Singapore charity that aims to build bridges of integration between migrant workers and residents of Singapore. This project is tended for the fulfillment of the academic requirements of the Software engineering Immersive programme from General Assembly, and ItsRainingRaincoats was used as the subject of the study. The contributors to this project are in no way, means or form related to ItsRainingRaincoats.

## Description

Part of IRR's activities includes the collection of donations from people in Singapore and the re-distribution of the items to migrant workers on request. The current state involves a labour-intensive and tedious process, with inefficient means of communication between the migrant workers, donors and volunteers.

The goal of this project is to create a platform on which all three parties can conduct their exchange. For migrant workers, this would mean having a means to put in a request for items, without language being a preventing factor. For donors, this would mean having a means to submit a request to IRR to donate items and to schedule a drop-off of said items. For volunteers, this would take the form of a management platform where they are able to view both types of requests and conduct the quality checks, approvals or rejections, and tracking for the requests.

Three different workflows have been identified, each relating to the specific user group. As of 27 Oct 2022, the basic requirements for the migrant worker and donor workflows have been completed.

## Application Structure

Displayed below is the structure of the application.

```
--> Root (/)
    |--> Language Select (/language-select)

    |--> Login (/login)

    |--> Account Creation (/create-account)
         |--> User Account Creation - Generic account creation, tags the type of account (i.e. migrant worker, donor or volunteer)
         |--> Profile Creation - Only for migrant workers, to facilitate delivery of items

    |--> Home (/home)
         |--> Home Page - Separate views for migrant workers and donors
              |--> Donate Home Page - Modals components (donate information)
              |--> Migrant Worker Home Page - Modal for instructions on requesting items
         |--> Application - Separate views for migrant workers and donors
              |--> Donate Application - Overview of items donated through image and texts
                   |--> Donate Application Card - Users will be able to see all their donated items by fetching the data from the backend. Users can delete specific item data in the Backend through the DELETE method. Subsequently mapping and displaying the data through text and photo.

    |--> Donate (/donate)
         |--> Donate dashboard
              |--> Item status information (modal)
              |--> Donate top 4 Category component - map and display donate categories (dynamic dataset)
              |--> In-need of item Card (dynamic dataset with sorting functionality)
              |--> How to donate instruction (modal)
         |--> Donate location selection
              |--> Navbar (Donate items)
              |--> Drop Menu Area selection (select NSEW states)
              |--> Maps NSEW (pick location to drop off items, and filter volunteer data to areas)
                   |--> Drop off information - Map and display filtered volunteer information such as available time and contact details (dynamic dataset)
         |--> Donate items 1
              |--> Donate Category (Generic Layer ) - map and display donate categories in the form of icons and words (dynamic data set)
         |--> Donate items 2
              |--> Donate Category Detailed (Detailed Layer) - Filter data based on Donate Items 1 selection. Map and display filtered donate categories
              |--> Donate Item Description - Create backend data through POST method. Users will define item details through onclick buttons which set the states for required body values.
                   |--> Upload photo - Currently hardcoded the photo upload to pull specific images from imgur, based on what user has selected.
         |--> Donate confirmation - Page to confirm submission, as well as option to donate a new item or view overall application.

    |--> Item Request (/item-request)
         |--> Item Category
              |--> Pre-set Items
              |--> Other requests - Through text inputs or photo inputs
         |--> Item Cart
         |--> Delivery Methods - Delivery to the migrant worker's dormitory or self-pickup
```

## Feature List

1. **Language Select** _(Currently not implemented)_

   - Four option buttons for users to select
   - One option must be selected before the user can proceed
   - Page can be skipped if the user has previously logged in

2. **Login Page**

   - Both username and password inputs must be filled up before the `login` button is enabled
   - An error in submission will be reflected as an `invalid username or password`
   - Users have the option to sign up for a new account from the login page

3. **Account Creation**

   - **User Group Selection**

     - Options for migrant workers, donors and volunteers
     - Selection of an option determines the account creation process for the user group

   - **Donor Account Creation**

     - Only consists of User Account Creation

   - **Migrant Worker Account Creation**

     - Split into User Account Creation and Migrant Worker Profile Creation

     - **User Account Creation**

       - Required fields are clearly labelled upon load
       - Front-end validation to ensure the correct password is submitted
       - Back-end validation to ensure the username has not been taken already

     - **Profile Creation**
       - Various input fields for the creation of the migrant worker's profile
       - Required fields are clearly labelled upon load
       - All required fields must be filled in before the users are able to proceed to the next page

4. **Home Page**

   - **Donate Home Page**
     - Options for donors to click on donate button to proceed with donation process
     - Selection of an option will bring up modals to thank and provide donation info

5. **Donation Request**

   - **Donate Donate dashboard**

     - Options for donors to click on item category to donate. The top 4 categories are dynamic and mapped through a dataset that can be modified based on requirement.
     - A clear card shows the items that are currently low in quantity and are in high demand. Sorted based on status. This card is also dynamic and mapped through a dataset that can be modified based on requirement. If an item has low quantity, the color changes accordingly during display.
     - An information icon that can be clicked to provide users with more information on what the status of items mean (through modal)

   - **Donate Location**

     - Users are directed to choose the location to donate their items to (NSEW) via a drop down option menu. Upon selection of area, this will filter volunteer data to the specific areas
     - Visual Maps with clickable location pins will appear for users to choose
     - Drop off information - Volunteer information will be filtered, mapped and displayed. This will include dynamic data such as available time and contact details.
     - All required fields must be selected before the users are able to proceed to the next page

   - **Donate Items Step 1**

     - Once the location and drop off details are confirmed, users will be directed to the donate items step 1 page where users will select a generic category of items they wish to donate (generic layer). This is displayed in a grid format and is dynamic and not hardcoded, allowing the team to change the categories more easily in the future. All required fields must be selected before the users are able to proceed to the next page.

   - **Donate Items Step 2**

     - Once the generic category has been chosen, users will now be directed to the second layer of selection to choose a more specific item to donate (detailed layer). This new category is filtered data based on Donate Items 1 selection, mapped and displayed accordingly in a grid format.
     - Upon selecting the detailed category, users will be directed to a new page (component) to select item details through onclick buttons which set the states for required body values that create backend data through POST method.
     - Users can also choose to upload photo of the items. Currently hardcoded the photo upload to pull specific images from imgur, based on what user has selected.

   - **Donate Confirmation**

     - Once the user submits the application, they will be directed to a page to confirm submission, as well as option to donate a new item or view overall application.

   - **Donate Application**

     - Finally in the donate application tab/page, users get an overview of the donated items pending review through images and texts. This is displayed through a Donate Application Card. The Donate Application Card will fetch the data from the backend. Users can also delete specific item data in the Backend through the DELETE method. Subsequently mapping and displaying the data through text and photo.

6. **Item Request**

- **Item Application**

  - A pre-set list of categories is available for users to select. Selection will present specific items for the user to add to their cart
  - A text input field is included as an option for users to use in the event they are unable to find the requested item amongst the pre-set list of items
  - In the event the user is unable to find the item within the pre-set list and is unable to adequately describe the item in the text input field, a photo upload option is available for them to upload a photo representing the item they would like to request for

- **Item Cart**

  - Displays the requested items as individual cards, along with the estimated waiting time for the item
  - Edit and Delete options are available for each card
  - An `Add Another` button is included for users to return to the Item Application page to add another item
  - Up to three items can be added to cart (or depending on the remaining number of requests left for the user) and the `Add Another` button will be removed when the limit is reached
  - The `Proceed to Delivery` button will navigate to the Delivery Method page

- **Delivery Method**

  - Includes a summary of requested items and their wait times
  - Last page for users to delete items from their cart before checking out
  - Users can select either delivery or self-pickup
  - The `Next` button will navigate to the confirmation page

- **Confirmation**

  - Includes a summary of requested items and their wait times
  - For a delivery option, the user's details will be populated from their profile (users will still be able to edit the information if they so wish to)
  - For a self-pickup option, IRR's warehouse address will be populated
  - The `Confirm & Apply` button will submit the item requests and if successful, navigate to the Success Page

- **Success**

  - Informs the user that their item application has been submitted
  - Users can then navigate to the Applications page to view all their item requests or return to the Item Application page to start a new application

## Back-end (Server)

The backend repository used for this project can be found at [its-raining-raincoat-backend]( https://github.com/maybelline-ang/its-raining-raincoat-backend). The technologies used for the backend are: Node.js, Express, MongoDB & Atlas, Mongoose, UUID, and Bcrypt.

### Back-end Repository Structure

- `server.js` is the entry point to our application, it defines our express server
- `db/db.js` connects our application to our MongoDB Atlas database 
- `routes/` contains the route definitions for our API
- `controllers/` contains the controller definitions used in our routes
- `models/` contains the schema definitions for our Mongoose models 

### Routes

There are 4 files in the `routes/` folder. Each file contains route definitions to Create, Read, Update, Delete (CRUD) different aspects of the application.
- `donateItem.js` to CRUD donated items selected by the Donor persona. The controllers used are defined in `controllers/donateItem.js`
- `itemRequestRouter.js` to CRUD the requested items selected by the Worker persona. The controllers used are defined in `controllers/itemRequestController.js`
- `userRouter.js` to create and to login user accounts (includes both Worker and Donor persona). The controllers used are defined in `controllers/userController.js`
- `workerProfileRouter.js` to CRUD the accounts and profiles for the Worker persona. The controllers used are defined in `controllers/workerProfileController.js`

### Models

There are 4 models in the `models/` folder. Each file contains Mongoose schema definitions.
- `DonateItems.js` for creating a new donated item, with details filled in by the Donor persona
- `ItemRequest.js` for creating a new requested item, with details filled in by the Worker persona
- `Users.js` for creating a new user account (includes both Donor and Worker accounts)
- `WorkerProfiles.js` for creating a new worker profile, taking in details filled in when a worker creates an account

## Potential Future Implementations

- **Interactive Map for Donor Location Selection**
- **Photo Upload for Item Donations and Item Requests**
- **Volunteer Workflows**

## Issues Faced

- Many repeated components (code is not DRY)
- No standardised implementation of certain features
