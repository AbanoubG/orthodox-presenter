var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var OPConstants = require('../constants/OPConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var today = new Date();

Attributes = {
  englishCheckbox: true,
  copticCheckbox: true,
  arabicCheckbox: false,
  day: today.getDate(),
  monthIndex: today.getMonth(),
  year: today.getFullYear()
};

var setState = function(state) {
  if (Attributes[state]) {
    Attributes[state] = false;
  } else {
    Attributes[state] = true;
  }
};

var NavSubMenuStore = assign({}, EventEmitter.prototype, {

    /**
     * @return {object}
     */
    getAll: function() {
        return Attributes;
    },

    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    /**
     * @param {function} callback
     */
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    /**
     * @param {function} callback
     */
    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

AppDispatcher.register(function(action) {

    switch (action.actionType) {
        case OPConstants.SET_STATE:
            setState(action.state);
            NavSubMenuStore.emitChange();
            break;
    }
});

module.exports = NavSubMenuStore;