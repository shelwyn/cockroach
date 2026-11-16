/**
 * Fixed, purely decorative backdrop. Three slow-drifting aurora orbs cycle
 * through the field-guide palette (moss → amber → rust → lichen) so the page
 * shifts colour without any JavaScript. Reduced-motion users get a single
 * static frame.
 */
export function AmbientBackdrop() {
  return (
    <div aria-hidden="true" className="ambient">
      <span className="ambient-orb ambient-orb-a" />
      <span className="ambient-orb ambient-orb-b" />
      <span className="ambient-orb ambient-orb-c" />
      <span className="ambient-sweep" />
      <span className="ambient-vignette" />
    </div>
  );
}
