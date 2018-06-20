401 JS --  Lab 28 & 29 Todo
===

## About
This is a todo app that one can use the app to create, track, and remove notes that track todo tasks.

## App Structure
```
App
  Landing
  Dashboard
    NoteForm
    NoteList
      [NoteItem]
         NoteForm
```
## Components
#### Landing Component
* Should display a concise description of the notes app

#### Dashboard Component
* Manages the entire `application state`
* Contains a notes array
* Has a bound `addNote(note)` method that adds a note to `state.notes`
  * each note that's added has following data
    * `id`: should always contain the result of `uuid.v1()`
    * `editing`: false by default
    * `completed`: false by default
    * `content`: user provided content
    * `title`: user provided title
* Has a bound `removeNote(note)` method that should remove a note from `state.notes` based on its `id`

#### NoteForm Component
* `onComplete`, adds a note to the application state

#### NoteList Component
* displays an unordered list of NoteItem components

#### NoteItem
* Default view
  * Display the notes title, content and a delete button
  * `onClick` for delete button, the note should be removed from the application state
  * `onDoubleClick` for notes content, it should switch to the edit view, showing the modal
  * `onClick` for edit button, it should switch to the edit view, showing the modal
* edit view
  * shows the NoteForm and update and close buttons
  * `onComplete`, the NoteForm should update the notes title or content
  * `onClose`, the edit view should disappear from the window

#### Modal
* uses `this.props.children` to define the content of the modal

## Tests
* Test Dashboard
  * Tests the initial state
* Test NoteForm
  * Test the initial state
