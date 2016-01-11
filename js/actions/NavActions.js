var AppDispatcher = require('../dispatcher/AppDispatcher');
var OPConstants = require('../constants/OPConstants');

var NavActions = {

  /**
   * @param  {string} id
   */
  prev: function(ids) {
    AppDispatcher.dispatch({
      actionType: OPConstants.PREV,
      ids: ids
    });
  }

};

module.exports = NavActions;