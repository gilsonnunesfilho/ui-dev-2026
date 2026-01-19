export function RegistrationLoading() {
  return (
    <div className="flex items-center justify-center p-4">
      <div className="flex flex-col items-center gap-6">
        <div className="relative">
          <div className="border-fill-secondary h-16 w-16 rounded-full border-4" />
          <div className="border-t-brand absolute inset-0 h-16 w-16 animate-spin rounded-full border-4 border-transparent" />
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-label-primary text-lg font-medium">
            Processing your registration
          </p>
          <p className="text-label-secondary text-sm">
            Please wait a moment...
          </p>
        </div>
      </div>
    </div>
  );
}
