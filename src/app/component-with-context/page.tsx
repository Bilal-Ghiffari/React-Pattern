"use client";

import * as React from "react";
import DemoBlock from "../../components/buttons/DemoBlock";
import {
  HidableCard,
  HidableCardHideButton,
  HidableCardSubtitle,
  HidableCardTitle,
} from "./components/hidable-card";

export default function ComponentWithContext() {
  return (
    <main className="py-20 layout">
      <DemoBlock className="mt-8 flex flex-col items-center py-20">
        <div className="w-full max-w-96">
          <HidableCard className="flex justify-between items-center">
            <div className="space-y-1">
              <HidableCard.Title>Card Title</HidableCard.Title>
              <HidableCard.Subtitle>Card Subtitle</HidableCard.Subtitle>
            </div>
            <HidableCard.HideButton />
          </HidableCard>
        </div>
      </DemoBlock>
    </main>
  );
}
