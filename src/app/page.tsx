"use client";
import Button from "@/components/Button";
import { ArrowRight, Check, Trash2 } from "lucide-react";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Button
        label="Save"
        size="medium"
        background="primary"
        icon={Check}
        iconPosition="left"
        tooltip="Klik untuk menyimpan"
        tooltipPosition="top"
        onClick={() => console.log("Saved")}
      />

      <Button
        label="Hapus"
        size="large"
        background="danger"
        icon={Trash2}
        iconPosition="right"
        tooltip="Akan menghapus data"
        tooltipPosition="right"
        onClick={() => console.log("Deleted")}
      />

      <Button label="Nonaktif" size="small" background="secondary" disabled />

      <Button
        label="Lihat Detail"
        size="medium"
        background="primary"
        icon={ArrowRight}
        iconPosition="right"
        tooltip="Ke halaman detail"
        href="/detail"
      />
    </div>
  );
}
