import { createContext } from 'react';
import {SignalingClient} from "./SignalingClient";

export const SignalingContext = createContext<SignalingClient | undefined>(undefined);
