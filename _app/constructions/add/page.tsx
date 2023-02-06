import AddEdit from '../AddEdit'

export default function Page() {
  return <AddEdit /> // build error if I export default AddEdit  :
  // Type error: Page "app/constructions/add/page.tsx" does not match the required types of a Next.js Page.
  // Invalid configuration:
  //  The exported Page component isn't correctly typed.
  //      Type "PageProps" isn't allowed.
}