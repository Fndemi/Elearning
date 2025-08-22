import type { Certificate } from "../../../types/dashboard";

interface Props {
  certificates: Certificate[];
}

export default function Certificates({ certificates }: Props) {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">Certificates</h2>
      <ul className="space-y-3">
        {certificates.map((cert) => (
          <li key={cert.id} className="flex justify-between items-center">
            <span>{cert.title}</span>
            <a
              href={cert.fileUrl}
              download
              className="text-blue-600 hover:underline"
            >
              Download
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
