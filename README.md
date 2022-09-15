# Cards Board

## Main commands
### Launch
```
yarn install
yarn start
```

### Run tests
```
yarn test
```

## Implementation
The following principles and concepts were taken as a base for planning:

- First things first
- Mobile-first
- Unit tests
- Accessibility
- Data Persistence

### UX
1. According to the _mobile-first_ principle, it is reasonable to start writing the layout and basic styles with a 
focus on small screens:
   - a vertically positioned screen of a mobile device should display a board column full width, plus part of the next list.
   - horizontal scrolling should be available to provide an access to subsequent columns, and drag-and-drop features should
be disabled for the mobile screens
2. Postpone drag-and-drop functionality for lists and cards moving: 
   - It should take most of the time for implementation comparable with all other tasks.
   - Additionally, this feature will be available only for desktop users. 
3. Following the principle of _mobile-first_, provide the ability to move lists and cards using the actions menu:
   - A button with an ellipsis icon should be placed in the top right corner of each list and card.
   - By pressing this button, a user opens a dropdown menu with moving options.
   - The dropdown menu should be closed after clicking outside.
4. Adding a label or a title for a new list or a card, plus editing existing text captions may be implemented 
similar to Trello and Google Spreadsheets interface:
   - A component `Editable` should show static text initially and replace it with an input field after clicking on the text.
   - The input should save a new value after changes, after losing focus, and after pressing Enter inside the input.

### Component Hierarchy
```
Layout
  AppBar
  Board
    BoardList
      ListHeader
        Editable
        ActionsMenu
          MenuItem
          MenuItem
          ...
      CardsList
        BoardCard
          Editable
          ActionsMenu
            MenuItem
            MenuItem
            ...
        BoardCard
        BoardCard
        ...
      ListFooter
        AddCard
          Editable
    BoardList
    BoardList
    ...
    AddList
```

### State Management
#### Problem
- Different actions that change list and card titles or positioning will be called from different levels 
of the component hierarchy.
- After changing a list or a card property, this value should be updated in all components that use this data.
- After the page refresh, lists and cards should persist.

#### Solution
- Provide a centralized state store using `useReducer` react hook on the top level of the application.
- Call `dispatch` method returned by `useReducer` to update the state.
- Create react context on the top level of the application and put there both `state` and `dispatch` from the `useReducer`.
- Reach `state` and `dispatch` in underlying components via `useContext` to prevent prop drilling through the whole 
component hierarchy.
- After state update, its value should be stored in the localStorage as a JSON string to provide data persistence after 
page refresh.
- Initial state value for the `useReducer` should be taken from the `localStorage`.

#### State Structure
```
{
  lists: [
    {
      id: 1663183754162,
      label: 'To Do',
      cards: [
        { id: 1663180424827, title: 'Develop board layout' },
        { id: 1663180473821, title: 'Organise state management' },
        ...
      ]
    },
    {
      id: 1663183782932,
      label: 'In Progress,
      cards: [
        ...
      ]
    },
    ...
  ]
}
```
#### State Actions

| Action                                                                                        | Component        |
|-----------------------------------------------------------------------------------------------|------------------|
| list/add                                                                                      | `<AddList />`    |
| card/add                                                                                      | `<AddCard />`    |
| card/rename<br>card/moveLeft<br>card/moveRight<br>card/moveUp<br>card/moveDown<br>card/delete | `<BoardCard />`  |
| list/rename<br>list/moveLeft<br>list/moveRight<br>list/delete                                 | `<BoardList />`  |

## Improvements
1. Increase code coverage:
   - write tests for components `ActionsMenu`, `BoardCard`, `BoardList`, `Editable`.
2. Add a new view for the card details. `CardView` should appear as a full-screen modal appearing over the board view:
   - Add new card properties with the opportunity to edit: `description` and `dueDate`.
   - Display new properties with editing opportunities inside the `CardView`.
3. Provide a possibility to move lists and cards using drag-and-drop interaction for desktop users:
   - It will expand users' capabilities significantly and allow them to put an item in a proper place in one touch.
4. Develop a multiline auto-sized textarea component:
   - Use it instead of simple input inside the `Editable` component for changing card and list text properties.
5. Store card changes history and output it in the `CardView` at the bottom under the heading `Activity`.
6. Allow to add several boards, see a list of boards, switch between them, and group boards into workspaces.
