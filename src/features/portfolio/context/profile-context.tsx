"use client";

import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
  type ReactNode,
} from "react";

export type Profile = "va" | "pharmacist";

interface TransitionOrigin {
  x: number;
  y: number;
}

interface ProfileContextValue {
  profile: Profile;
  isTransitioning: boolean;
  transitionOrigin: TransitionOrigin;
  switchProfile: (to: Profile, origin: TransitionOrigin) => void;
}

const ProfileContext = createContext<ProfileContextValue | null>(null);

export function ProfileProvider({ children }: { children: ReactNode }) {
  const [profile, setProfile] = useState<Profile>("va");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionOrigin, setTransitionOrigin] = useState<TransitionOrigin>({ x: 50, y: 0 });
  const lockRef = useRef(false);

  const switchProfile = useCallback((to: Profile, origin: TransitionOrigin) => {
    if (lockRef.current) {return;}
    lockRef.current = true;
    setTransitionOrigin(origin);
    setIsTransitioning(true);
    setProfile(to); // immediate — fold animation handles the visual reveal

    setTimeout(() => {
      setIsTransitioning(false);
      lockRef.current = false;
    }, 480);
  }, []);

  return (
    <ProfileContext value={{ profile, isTransitioning, transitionOrigin, switchProfile }}>
      {children}
    </ProfileContext>
  );
}

export function useProfile() {
  const ctx = useContext(ProfileContext);
  if (!ctx) {throw new Error("useProfile must be used inside ProfileProvider");}
  return ctx;
}
