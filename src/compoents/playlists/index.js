/* eslint-disable react/no-unknown-property */
import {AiOutlineDelete} from 'react-icons/ai'
import './index.css'

const Playlists = props => {
  const {playListDetails, deleteTrack} = props
  const {imageUrl, id, name, genre, duration} = playListDetails
  const onClickDeleteTrack = () => {
    deleteTrack(id)
  }

  return (
    <>
      <li className="list-items">
        <div className="song-img-name">
          <img src={imageUrl} className="track-img" alt="track" />
          <div className="song">
            <p className="song-name">{name}</p>
            <p className="category">{genre}</p>
          </div>
        </div>
        <div className="track-time-delete">
          <p className="duration">{duration}</p>
          <button
            type="button"
            className="delete-btn"
            onClick={onClickDeleteTrack}
            testid="delete"
          >
            <AiOutlineDelete className="delete-logo" />
          </button>
        </div>
      </li>
    </>
  )
}

export default Playlists
