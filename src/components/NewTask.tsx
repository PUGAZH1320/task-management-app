import React from 'react'
import { NoteData,Tag } from './Dash'
import NoteForm from './NoteForm'


type NewNoteProps = {
    onSubmit:(data:NoteData) => void
    onAddTag: (tag: Tag) => void
    availableTags: Tag[]
}

const NewTask = ({onSubmit,onAddTag, availableTags}: NewNoteProps) => {
  return (
    <div>
      <NoteForm onSubmit={onSubmit} onAddTag={onAddTag} availableTags={availableTags}/>
    </div>
  )
}

export default NewTask
