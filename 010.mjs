// Imports
    import express from 'express';
    import chalk from 'chalk';
    import mic from 'mic';
    import wavefile from 'wavefile';
    import { pipeline } from '@huggingface/transformers';

    import { setupEnglishServer, broadcastENTranslation } from './servers/en-server.js';
    import { setupFrenchServer, broadcastFRTranslation } from './servers/fr-server.js';
    import { startAudioProcessing } from './audio/audio.js';

// Vars and Consts
//    const host = "10.42.0.1";
    const host = "127.0.0.1";

// Set up English server
    setupEnglishServer(host);

// Set up French server
    setupFrenchServer(host);

// Initialize and start audio processing
    startAudioProcessing(broadcastENTranslation, broadcastFRTranslation);
