export const floorUnit = {
    atomPx: 20,
    atomsPerPerson: 6,
    personPx: () => {this.atomPx * this.atomsPerPerson}
};

export const floorPositionInAtoms = (position) => {
    const column = Math.floor(position/2);

    const row = (position/2) > column ? 1 : 0;

    return {
        x: floorUnit.atomsPerPerson/2 + floorUnit.atomsPerPerson * column,
        y: floorUnit.atomsPerPerson/2 + floorUnit.atomsPerPerson * row
    };
};