import type { CompanyData } from "@/lib/types";
import Card from "@/components/Card";
import DocRow from "@/components/DocRow";

export default function DocsPanel({ company }: { company: CompanyData }) {
  return (
    <Card className="!p-0">
      {company.docs.map((doc, i) => (
        <DocRow key={i} doc={doc} />
      ))}
    </Card>
  );
}
