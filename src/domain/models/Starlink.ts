interface SpaceTrack {
    CCSDS_OMM_VERS: string;
    COMMENT: string;
    CREATION_DATE: string;
    ORIGINATOR: string;
    OBJECT_NAME: string;
    OBJECT_ID: string;
    CENTER_NAME: string;
    REF_FRAME: string;
    TIME_SYSTEM: string;
    MEAN_ELEMENT_THEORY: string;
    EPOCH: string;
    MEAN_MOTION: number;
    ECCENTRICITY: number;
    INCLINATION: number;
    RA_OF_ASC_NODE: number;
    ARG_OF_PERICENTER: number;
    MEAN_ANOMALY: number;
    EPHEMERIS_TYPE: number;
    CLASSIFICATION_TYPE: string;
    NORAD_CAT_ID: number;
    ELEMENT_SET_NO: number;
    REV_AT_EPOCH: number;
    BSTAR: number;
    MEAN_MOTION_DOT: number;
    MEAN_MOTION_DDOT: number;
    SEMIMAJOR_AXIS: number;
    PERIOD: number;
    APOAPSIS: number;
    PERIAPSIS: number;
    OBJECT_TYPE: string;
    RCS_SIZE?: any;
    COUNTRY_CODE: string;
    LAUNCH_DATE: string;
    SITE: string;
    DECAY_DATE?: any;
    DECAYED: number;
    FILE: number;
    GP_ID: number;
    TLE_LINE0: string;
    TLE_LINE1: string;
    TLE_LINE2: string;
}

export interface Starlink {
    spaceTrack: SpaceTrack;
    version: string;
    launch: string;
    longitude: number;
    latitude: number;
    height_km: number;
    velocity_kms: number;
    id: string;
}


