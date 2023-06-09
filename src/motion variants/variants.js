export const linkSpanHeader = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        fontWeight: 700,
        transition: {
            duration: 0.8
        }
    },
    hover: {
        color: "#30c",
    }
}


export const activeLinkSpanHeader = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        fontWeight: 700,
        color: "#30c",
        transition: {
            duration: 0.8
        }
    },
    hover: {
        color: "#30c",
    }
}

export const mainTitle = {
    hidden: {
        x: -1000,
        opacity: 0
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: {
            delay: custom * 0.3,
            duration: 0.8
        }
    })
}

export const heroParagraph = {
    hidden: {
        x: -1000,
        opacity: 0
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: {
            delay: custom * 1.3,
            duration: 0.8
        }
    })
}

export const heroSocial = {
    hidden: {
        x: -1000,
        opacity: 0
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: {
            delay: custom * 1.6,
            duration: 0.8
        },
    })
}

export const myPhoto = {
    hidden: {

    },
    visible: {
        scale: 1.09,
        transition: {
            delay: 0.5,
            duration: 2,
            repeat: Infinity,
            repeatDelay: 1,
            repeatType: 'reverse',
            type: 'tween',
            ease: 'easeInOut'
        },

    }
}

export const heroButton = {
    hidden: {
        x: -1000,
        opacity: 1
    },
    visible: custom => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: custom * 1.9,
            duration: 0.8
        },
    })
}

export const largeTitle = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.8,
            duration: 0.8
        }
    }
}

export const projectVariant = {
    hidden: {
        opacity: 0,
        x: -200
    },
    visible: custom => ({
        opacity: 1,
        transition: {
            delay: custom * 0.5,
            duration: 0.8
        },
        x: 0
    })
}


export const largeTitleProjectsDetails = {
    hidden: {
        opacity: 0,
        x: 1000
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.1,
            duration: 0.8
        },
        x: 0
    }
}

export const projectsDetailsImage = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.3,
            duration: 1
        },
    }
}

export const packVariant = {
    hidden: {
        opacity: 0,
    },
    visible: custom => ({
        opacity: 1,
        transition: {
            delay: custom * 0.5,
            
        }
    })
}

export const techVariant = {
    hidden: {
        opacity: 0,
    },
    visible: custom => ({
        opacity: 1,
        transition: {
            delay: custom * 0.5,
            
        }
    })
}


export const apisVariant = {
    hidden: {
        opacity: 0,
        x: 150
    },
    visible: custom => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: custom * 0.5,
            duration: 0.8
        }
    }),
}

export const fieldContactFormVariant = {
    hidden: {
        opacity: 0,
        y: 250
    },
    visible: custom => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: custom * 0.5,
            duration: 0.8
        }
    })
}

export const buttonContactFormVariant = {
    hidden: {
        opacity: 0,
    },
    visible: custom => ({
        opacity: 1,
        transition: {
            delay: custom * 0.8,
            duration: 0.5
        }
    })
}

export const emailAddresVariant = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 1,
            duration: 0.8
        }
    }
}

export const techStackTitleVariant = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 1,
            duration: 0.8
        }
    }
}

export const largeParagraphAboutMeVariant = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 1,
            duration: 0.8
        }
    }
}

export const defaultCertificateVariant = {
    hidden: {
        opacity: 0
    },
    visible: custom => ({
        opacity: 1,
        transition: {
            delay: custom * 0.5,
            duration: 0.8
        }
    })
}


export const chosenCertificateVariant = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 0.4,
        transition: {
            duration: 0.5
        }
    }
}


export const activeCertificateVariant = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.8
        }
    }
}

export const contactHintVariant = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.5,
            duration: 0.8
        }
    }
}

export const projectMobileVariant = {
    hidden: {
        opacity: 0,
        x: -150
    },
    visible: custom => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: custom * 0.5,
            duration: 0.8
        }
    }),
}


export const myPhotoMobileVariant = {
    hidden: {

    },
    visible: {
        scale: 1.04,
        transition: {
            delay: 0.5,
            duration: 2,
            repeat: Infinity,
            repeatDelay: 1,
            repeatType: 'reverse',
            type: 'tween',
            ease: 'easeInOut'
        },
    }
}