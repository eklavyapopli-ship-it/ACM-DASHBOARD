"use client";

import { use } from "react";
import Loader from "@/components/Loader";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import { useUser } from "@clerk/nextjs";
import React, { useState } from "react";
import MeetingSetup from "@/components/MeetingSetup";
import MeetingRoom from "@/components/MeetingRoom";
import { useGetCallById } from "@/hooks/UseGetCallById";

export default function Meeting({ params }: { params: Promise<{ id: string }> }) {
  // ✅ unwrap params using React.use()
  const { id } = use(params);

  const { user, isLoaded } = useUser();
  const [isSetupComplete, setIsSetupComplete] = useState(false);
  const { call, isCallLoading } = useGetCallById(id);

  if (!isLoaded || isCallLoading) return <Loader />;

  return (
    <main className="h-screen w-full">
      <StreamCall call={call}>
        <StreamTheme>
          {!isSetupComplete ? (
            <MeetingSetup setIsSetupComplete={setIsSetupComplete} />
          ) : (
            <MeetingRoom />
          )}
        </StreamTheme>
      </StreamCall>
    </main>
  );
}
