import { DEMOCRAT, REPUBLICAN, SOURCES } from './shared/constants';

export const makeLocals = (data) => {
    let obj = {
        sources: [...data, ...SOURCES],
        ui: {
            selected: 0
        },
        candidates: {
            democrat: DEMOCRAT,
            republican: REPUBLICAN
        }
    }
    return obj;
};
