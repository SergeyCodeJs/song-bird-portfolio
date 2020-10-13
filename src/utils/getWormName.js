export default function getWormName(score, winRound) {
    let wormName;

    if (winRound) {
        switch (score) {
            case 0:
            case 5:
                wormName = 'червячков'
                break
            case 1:
            case 2:
            case 3:
            case 4:
                wormName = 'червячка';
                break;
            default:
                wormName = 'червячков';
        }
        return wormName
    }

    switch (score) {
        case 24:
        case 23:
        case 22:
            wormName = 'червячка';
            break;
        case 21:
            wormName = 'червячок';
            break;
        case 4:
        case 3:
        case 2:
            wormName = 'червячка';
            break;
        case 1:
            wormName = 'червячок';
            break;
        default:
            wormName = 'червячков';
    }

    return wormName
}