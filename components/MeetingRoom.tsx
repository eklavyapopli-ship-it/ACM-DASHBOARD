"use client";
import EndCallButton from "./EndCallButton";
import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  CallControls,
  CallParticipantsList,
  PaginatedGridLayout,
  SpeakerLayout,
} from "@stream-io/video-react-sdk";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { LayoutList, UserIcon } from "lucide-react";
import { Button } from "./ui/button";

type CallLayoutType = "grid" | "speaker-left" | "speaker-right";

const MeetingRoom = () => {
    const searchParams=useSearchParams();
    const isPersonalRoom= !!searchParams.get('personal')
  const router = useRouter();
  const [layout, setLayout] = useState<CallLayoutType>("speaker-left");
  const [showParticipants, setShowParticipants] = useState(false);
  const [isMeetingGoingOn, setIsMeetingGoingOn] = useState(true);

  useEffect(() => {
    if (!isMeetingGoingOn) {
      router.push("/");
    }
  }, [isMeetingGoingOn, router]);

  const CallLayout = () => {
    switch (layout) {
      case "grid":
        return <PaginatedGridLayout />;
      case "speaker-right":
        return <SpeakerLayout participantsBarPosition="left" />;
      default:
        return <SpeakerLayout participantsBarPosition="right" />;
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-black">
      <div className="relative flex h-full w-full items-center justify-center">
        <div className="flex w-full max-w-[1000px] items-center justify-center">
          <CallLayout />
        </div>

        {/* Participants Panel */}
        {showParticipants && (
          <div className="absolute right-0 top-0 h-[calc(100vh-86px)] w-64 text-white z-50 shadow-lg">
            <CallParticipantsList onClose={() => setShowParticipants(false)} />
          </div>
        )}
      </div>

      {/* Bottom Controls */}
      <div className="fixed bottom-0 flex w-full items-center justify-center gap-5 bg-black py-2">
        <CallControls onLeave={() => setIsMeetingGoingOn(false)} />

        {/* Layout Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger className="cursor-pointer rounded-2xl bg-[#19232d] px-4 py-2 hover:bg-[#4c535b]">
            <LayoutList size={20} className="text-white" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="border-black text-black">
            {(["grid", "speaker-left", "speaker-right"] as CallLayoutType[]).map(
              (item, index) => (
                <div key={index}>
                  <DropdownMenuItem
                    className="cursor-pointer text-black"
                    onClick={() => setLayout(item)}
                  >
                    {item}
                  </DropdownMenuItem>
                  {index < 2 && <DropdownMenuSeparator />}
                </div>
              )
            )}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Participants Toggle Button */}
        <Button
          onClick={() => setShowParticipants((prev) => !prev)}
          className="rounded-2xl bg-[#19232d] p-2"
        >
          <UserIcon className="text-white" />
        </Button>
        <EndCallButton/>
      </div>
    </section>
  );
};

export default MeetingRoom;
