import _ from 'lodash';

export const sanitizeText = text => text.trim();

export const getTimestamp = () => new Date().getTime();

export const isValidString = (str) => !(_.isNil(str) || _.isEmpty(str));

export const removeUnderscore = (str) => _.replace(str, '_', ' ');
