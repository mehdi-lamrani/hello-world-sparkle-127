import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

interface Flight {
  flightNo: string;
  route: string;
  std: string;
  etd: string;
  sta: string;
  eta: string;
  aircraftType: string;
  status: string;
  paxImpacted: string;
  paxRecovered: string;
}

const flights: Flight[] = [
  {
    flightNo: "IA 191",
    route: "CDG-AMS",
    std: "06:00",
    etd: "06:00",
    sta: "07:15",
    eta: "07:15",
    aircraftType: "A320",
    status: "ARRIVED",
    paxImpacted: "-",
    paxRecovered: "-",
  },
  {
    flightNo: "IA 101",
    route: "CDG-LHR",
    std: "06:30",
    etd: "07:15",
    sta: "07:00",
    eta: "07:45",
    aircraftType: "A321",
    status: "ARRIVED",
    paxImpacted: "-",
    paxRecovered: "-",
  },
  {
    flightNo: "IA 121",
    route: "ORY-BCN",
    std: "06:45",
    etd: "08:00",
    sta: "08:30",
    eta: "09:45",
    aircraftType: "737-800",
    status: "ARRIVED",
    paxImpacted: "-",
    paxRecovered: "-",
  },
  {
    flightNo: "IA 111",
    route: "CDG-FRA",
    std: "07:00",
    etd: "07:00",
    sta: "08:15",
    eta: "08:15",
    aircraftType: "A320",
    status: "ARRIVED",
    paxImpacted: "-",
    paxRecovered: "-",
  },
  {
    flightNo: "IA 131",
    route: "LYS-FCO",
    std: "07:30",
    etd: "07:30",
    sta: "09:00",
    eta: "09:00",
    aircraftType: "A320",
    status: "ARRIVED",
    paxImpacted: "-",
    paxRecovered: "-",
  },
  {
    flightNo: "IA 201",
    route: "ORY-LIS",
    std: "07:45",
    etd: "07:45",
    sta: "09:30",
    eta: "09:30",
    aircraftType: "737-800",
    status: "ARRIVED",
    paxImpacted: "-",
    paxRecovered: "-",
  },
];

export function FlightTable() {
  return (
    <div className="rounded-lg border border-border bg-card">
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/50">
            <TableHead className="font-semibold">Flight No.</TableHead>
            <TableHead className="font-semibold">Route</TableHead>
            <TableHead className="font-semibold">STD</TableHead>
            <TableHead className="font-semibold">ETD</TableHead>
            <TableHead className="font-semibold">STA</TableHead>
            <TableHead className="font-semibold">ETA</TableHead>
            <TableHead className="font-semibold">Aircraft Type</TableHead>
            <TableHead className="font-semibold">Disruption Status</TableHead>
            <TableHead className="font-semibold">PAX Impacted</TableHead>
            <TableHead className="font-semibold">PAX recovered</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {flights.map((flight, idx) => (
            <TableRow key={idx} className="hover:bg-muted/30">
              <TableCell className="font-medium text-primary">{flight.flightNo}</TableCell>
              <TableCell>{flight.route}</TableCell>
              <TableCell>{flight.std}</TableCell>
              <TableCell
                className={
                  flight.etd !== flight.std ? "text-destructive font-medium" : ""
                }
              >
                {flight.etd}
              </TableCell>
              <TableCell>{flight.sta}</TableCell>
              <TableCell
                className={
                  flight.eta !== flight.sta ? "text-destructive font-medium" : ""
                }
              >
                {flight.eta}
              </TableCell>
              <TableCell>{flight.aircraftType}</TableCell>
              <TableCell>
                <Badge variant="secondary" className="bg-muted text-muted-foreground">
                  {flight.status}
                </Badge>
              </TableCell>
              <TableCell className="text-muted-foreground">{flight.paxImpacted}</TableCell>
              <TableCell className="text-muted-foreground">{flight.paxRecovered}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
