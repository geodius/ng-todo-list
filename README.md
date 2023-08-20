# ng-todo-list
An angular app for todo lists

## The application was created with the following requirements and goals in mind
- Handle multiple lists with their own names
- Each list can have multiple tasks on them
- Each task consists of a description and can be marked as complete
- The user can create lists

## Technical details
The application consists of two components:
- list: this component displays the name of lists the user has created, clicking on their name leads to their own page with an option to create a new list.
- items: this component displays the tasks of each list and the option to add new tasks to those lists.

The handling of data is done by the listdata service, using an array of strings for storing the name of lists, and an array for the items and the functions for adding new elements to each.
Routing was used for directing links to the items component using a parameter to display the appropriate items for the list. 
