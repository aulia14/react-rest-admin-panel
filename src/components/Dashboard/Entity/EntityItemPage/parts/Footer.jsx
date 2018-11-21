import React from 'react'
import './Footer.styl'
import { observer } from 'mobx-react'
import { PageType, FooterClickType } from '../EntityItemPage'

const UpdateEntityFooter = ({ type, onClick }) => {
  const saveAndContinue = e => onClick(e, FooterClickType.CONTINUE)
  const saveAndReload = e => onClick(e, FooterClickType.RELOAD)
  const save = e => onClick(e, FooterClickType.SAVE)

  return (
    <>
      {type === PageType.UPDATE ? (
        <>
          <button className="delete" type="button">
            Delete
          </button>
          <div className="right">
            <button type="button" onClick={saveAndReload}>
              Save and add another
            </button>
            <button type="button" onClick={saveAndContinue}>
              Save and continue
            </button>
            <button type="button" onClick={save}>
              Save
            </button>
          </div>
        </>
      ) : (
        <div className="right">
          <button type="button" onClick={save}>
            Save
          </button>
        </div>
      )}
    </>
  )
}

export default observer(UpdateEntityFooter)
