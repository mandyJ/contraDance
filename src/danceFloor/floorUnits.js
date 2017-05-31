export const floorUnit = {
    atom: 20,
    person: 120
};

export const floorPosition = (position) => {
    const column = Math.floor(position/2);

    const row = (position/2) > column ? 1 : 0;

    return {
        x: floorUnit.person/2 + floorUnit.person * column,
        y: floorUnit.person/2 + floorUnit.person * row
    };
};