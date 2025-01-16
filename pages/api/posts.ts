import { NextApiRequest, NextApiResponse } from 'next';

interface Donasi {
  id: number;
  nama: string;
  totalDonasi: number;
}

let donasiList: Donasi[] = [
  { id: 1, nama: 'John Doe', totalDonasi: 5000 },
  { id: 2, nama: 'Jane Doe', totalDonasi: 3000 },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Read all donasi (GET)
  if (req.method === 'GET') {
    return res.status(200).json(donasiList);
  }

  // Create new donasi (POST)
  if (req.method === 'POST') {
    const { nama, totalDonasi } = req.body;
    const newDonasi: Donasi = { id: donasiList.length + 1, nama, totalDonasi };
    donasiList.push(newDonasi);
    return res.status(201).json(newDonasi);
  }

  // Update donasi (PUT)
  if (req.method === 'PUT') {
    const { id, nama, totalDonasi } = req.body;
    const donasiIndex = donasiList.findIndex((d) => d.id === id);
    if (donasiIndex !== -1) {
      donasiList[donasiIndex] = { id, nama, totalDonasi };
      return res.status(200).json(donasiList[donasiIndex]);
    }
    return res.status(404).json({ message: 'Donasi not found' });
  }

  // Delete donasi (DELETE)
  if (req.method === 'DELETE') {
    const { id } = req.query;
    donasiList = donasiList.filter((d) => d.id !== parseInt(id as string));
    return res.status(204).end();
  }

  return res.status(405).end(); // Method Not Allowed
}
