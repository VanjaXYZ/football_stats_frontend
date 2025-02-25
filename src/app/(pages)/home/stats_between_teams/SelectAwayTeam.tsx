"use client";
import {
  getAwayTeams,
  getTeams,
} from "@/app/routes/Stats_Between_Teams/routes";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useStatsBetweenStore } from "@/store/StatsBetweenStore";
import { useEffect, useState } from "react";

const SelectAwayTeam = () => {
  const { setAwayTeam, stats } = useStatsBetweenStore() as any;
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchTeams = async () => {
      if (stats?.country && stats?.homeTeam) {
        try {
          const teamsData = await getAwayTeams(stats?.country, stats?.homeTeam);
          setTeams(teamsData?.teams);
        } catch (error) {
          console.error("Error fetching away team...", error);
        }
      }
    };

    fetchTeams();
  }, [stats.country, stats?.homeTeam]);

  return (
    <div>
      {stats.homeTeam && (
        <Select
          onValueChange={(e: any) => setAwayTeam(e)}
          value={stats.awayTeam}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder={`Select away team`} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Away Team</SelectLabel>
              {teams?.map((item: any) => (
                <SelectItem value={item} key={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      )}
    </div>
  );
};

export default SelectAwayTeam;
