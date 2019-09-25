var prefix = '[ruriweb-shit-blocker]';

Logger = {

    log: function (param) {
        console.log(prefix + ' ' + param);
    },

    logExecute: function (name) {
        this.log('Execute - ' + name);
    },

    logDone: function logDone(name) {
        this.log('Done - ' + name);
    }
};
