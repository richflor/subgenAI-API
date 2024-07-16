import z from "zod";

//zod schema
const exampleSchema = z.object({
    id: z.number().int(),
    string: z.string().min(4).max(20),
    map: z.map(z.string(),z.enum(["enum1", "enum2"]))
})

//type built from zod schema
type example = z.infer<typeof exampleSchema>

//validata data based on zod schema
const data = "data";
const result = exampleSchema.safeParse(data);
if (!result.success) {
    // handle error then return
    result.error;
} else {
    // do something
    result.data;
}

//documentation
//use safe
//https://zod.dev/?id=basic-usage