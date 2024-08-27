"use client";

import React, { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRightIcon, Loader2Icon } from "lucide-react";

const formSchema = z.object({
  prompt: z.string().min(2),
});

const StoryGenerator = () => {
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="w-full mt-20 p-4 bg-orange-500 rounded-2xl">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="prompt"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    autoFocus
                    {...field}
                    className="bg-white text-black text-lg placeholder:text-gray-500  border-none resize-none placeholder:text-sm"
                    placeholder="원하는 이야기를 작성하세요."
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <div className="mt-3 flex justify-end">
            <Button
              disabled={!form.formState.isValid}
              type="submit"
              size="icon"
              className="bg-transparent"
            >
              {loading ? (
                <Loader2Icon className="size-6 text-gray-500 animate-spin" />
              ) : (
                <ArrowRightIcon className="size-6 text-gray-500" />
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default StoryGenerator;
