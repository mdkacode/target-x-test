import React from 'react'
import PropTypes from 'prop-types'

import styles from '../FoldersWrapper.module.scss'
import api from '../../../services/axios.client'

class NewFolderInput extends React.Component {
    handleValidateFolderName = (e) => {
      const { addFolderFn, toggleFolderCreationFn } = this.props
      const name = e.target.value

      if (name !== '') {
        const folderObject = {
          name: name,
          url: name.toLowerCase()
        }
        addFolderFn(folderObject)

        api({
          method: 'post',
          url: 'folders',
          data: folderObject
        }).then(e => {
          // console.log(`Folder Created Successfully ${e}`)  // open when debugging
        }).catch((error) => {
          console.log('NEW FOLDER CREATION ERROR', error)
        })
      }

      toggleFolderCreationFn()
    }

  handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.handleValidateFolderName(e)
    }
  }

  render () {
    return (
      <div className={styles.inputWrapper}>
        <input
          autoFocus
          className={styles.input}
          onBlur={this.handleValidateFolderName}
          onKeyDown={this.handleKeyDown}
          placeholder='New folder'
          type='text'
        />
      </div>
    )
  }
}

NewFolderInput.propTypes = {
  addFolderFn: PropTypes.func.isRequired,
  toggleFolderCreationFn: PropTypes.func.isRequired
}

export default NewFolderInput
