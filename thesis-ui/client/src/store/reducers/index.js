import { combineReducers } from 'redux';

import dataReducers from './dataReducers';
import activeUserReducers from './active_userReducers';
import currentListReducers from './current_listReducers';
import currentPostReducers from './current_postReducers';
import currentProfileReducers from './current_profileReducers';
import currentFollowingReducers from './current_followingReducers';
import currentWatchingReducers from './current_watchingReducers';
import socketReducers from './socketReducers';
import imagesReducers from './imagesReducers';
import current_roomId from './roomIdReducers';
import messages from './messagesReducers';
import positiongeo from './positionReducers.js';
import newPostIdReducer from './new_postIdReducers';
import followingListReducer from './following_listReducers';
import barteringListReducer from './bartering_listReducers';
import watchingListReducer from './watching_listReducers';
import sellingListReducer from './selling_listReducers';
import mainPhotoReducer from './main_photoReducers';
import currentSearchReducers from './current_searchReducers';
import currentCategoryReducers from './current_categoryReducers';
import categoryNameReducers from './category_nameReducers';

import acceptedOffers from './accepted_offersReducers';

export default combineReducers({
  positiongeo,
  messages,
  dataReducers,
  active_user: activeUserReducers,
  current_list: currentListReducers,
  current_post: currentPostReducers,
  current_profile: currentProfileReducers,
  current_following: currentFollowingReducers,
  current_watching: currentWatchingReducers,
  socket: socketReducers,
  current_roomId,
  images: imagesReducers,
  newPostId: newPostIdReducer,
  selling_list: sellingListReducer,
  watching_list: watchingListReducer,
  bartering_list: barteringListReducer,
  following_list: followingListReducer,
  main_photo: mainPhotoReducer,
  acceptedOffers,
  current_search: currentSearchReducers,
  current_category: currentCategoryReducers,
  category_name: categoryNameReducers
});
