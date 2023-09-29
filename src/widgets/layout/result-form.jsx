import { Card, Button, Input, Textarea } from "@material-tailwind/react";

/**
 * 
 * The ResultForm component is a form that includes inputs for an agent name, a 
 * reason for a flagged call, and a save button.
 
 * @returns A Card component containing an Input component for the agent name, a 
 * Textarea component for the reason for flagged call, and a Button component for
 * saving the form.
 *
**/

export function ResultForm() {
  return (
    <Card className="flex flex-1 gap-y-4 px-12 py-12">
      <Input className="h-fit" label="Agent Name" size="lg" color="blue" />
      <Textarea label="Reason for Flagged Call" size="lg" color="blue" />
      <Button color="blue" ripple="light" className="w-24 self-end">
        Save
      </Button>
    </Card>
  );
}

export default ResultForm;
