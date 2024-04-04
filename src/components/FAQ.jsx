import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "components/ui/accordion";

export default function FAQ() {
  return (
    <Accordion type="single" collapsible className="w-8/12 m-auto mt-12 ">
      <h2 className="text-center">FAQ</h2>
      <AccordionItem value="item-1">
        <AccordionTrigger>How do I create a library?</AccordionTrigger>
        <AccordionContent>
          To create a library you need to .......
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is there a monthly subscription?</AccordionTrigger>
        <AccordionContent>
          No. We do not offer a subscription model.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>How can I update my profile? </AccordionTrigger>
        <AccordionContent>
          To update your profile, you need to.....
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
