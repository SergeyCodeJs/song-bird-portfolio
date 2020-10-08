function getWormName(score) {
  let wormName;

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