import { colors } from '../color';

const basic = {
    primary: colors.blue,
    borderColor: colors.black,
};

const btn = {
    fontSize: 26,
    normal: {
        bg: colors.white,
        fg: colors.darkBlue,
        border: `1px solid ${colors.darkBlue}`
    },
    primary: {
        bg: basic.primary,
        fg: colors.white,
        border: 0,
    }
};
export default {
    ...basic,
    btn
};
