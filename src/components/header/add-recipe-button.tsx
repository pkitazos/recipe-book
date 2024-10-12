"use client";
import { FilePlus2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";

const newRecipeSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  subTitle: z.string().optional(),
});

type NewRecipe = z.infer<typeof newRecipeSchema>;

export function AddRecipeButton() {
  const form = useForm<NewRecipe>({
    resolver: zodResolver(newRecipeSchema),
    defaultValues: {
      title: "",
    },
  });

  function onSubmit(data: NewRecipe) {
    console.log(data);
  }

  return (
    <Dialog>
      <DialogTrigger>
        <FilePlus2 />
        Add new recipe
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add new recipe</DialogTitle>
          <DialogDescription>What is this recipe called?</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormDescription>
                    what do you want to call your recipe?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="subTitle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sub-Title</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormDescription>a brief tagline</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
